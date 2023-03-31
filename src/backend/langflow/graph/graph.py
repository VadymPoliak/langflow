from typing import Dict, List, Union

from langflow.graph.base import Edge, Node
from langflow.graph.nodes import (
    AgentNode,
    ChainNode,
    FileToolNode,
    LLMNode,
    PromptNode,
    ToolkitNode,
    ToolNode,
    WrapperNode,
)
from langflow.interface.agents.base import agent_creator
from langflow.interface.chains.base import chain_creator
from langflow.interface.llms.base import llm_creator
from langflow.interface.prompts.base import prompt_creator
from langflow.interface.toolkits.base import toolkits_creator
from langflow.interface.tools.base import tool_creator
from langflow.interface.tools.constants import ALL_TOOLS_NAMES, FILE_TOOLS
from langflow.interface.wrappers.base import wrapper_creator
from langflow.utils import payload


class Graph:
    def __init__(
        self,
        nodes: List[Dict[str, Union[str, Dict[str, Union[str, List[str]]]]]],
        edges: List[Dict[str, str]],
    ) -> None:
        self._nodes = nodes
        self._edges = edges
        self._build_graph()

    def _build_graph(self) -> None:
        self.nodes = self._build_nodes()
        self.edges = self._build_edges()
        for edge in self.edges:
            edge.source.add_edge(edge)
            edge.target.add_edge(edge)

        for node in self.nodes:
            node._build_params()

    def get_node(self, node_id: str) -> Union[None, Node]:
        return next((node for node in self.nodes if node.id == node_id), None)

    def get_nodes_with_target(self, node: Node) -> List[Node]:
        connected_nodes: List[Node] = [
            edge.source for edge in self.edges if edge.target == node
        ]
        return connected_nodes

    def build(self) -> List[Node]:
        # Get root node
        root_node = payload.get_root_node(self)
        return root_node.build()

    def get_node_neighbors(self, node: Node) -> Dict[Node, int]:
        neighbors: Dict[Node, int] = {}
        for edge in self.edges:
            if edge.source == node:
                neighbor = edge.target
                if neighbor not in neighbors:
                    neighbors[neighbor] = 0
                neighbors[neighbor] += 1
            elif edge.target == node:
                neighbor = edge.source
                if neighbor not in neighbors:
                    neighbors[neighbor] = 0
                neighbors[neighbor] += 1
        return neighbors

    def _build_edges(self) -> List[Edge]:
        # Edge takes two nodes as arguments, so we need to build the nodes first
        # and then build the edges
        # if we can't find a node, we raise an error

        edges: List[Edge] = []
        for edge in self._edges:
            source = self.get_node(edge["source"])
            target = self.get_node(edge["target"])
            if source is None:
                raise ValueError(f"Source node {edge['source']} not found")
            if target is None:
                raise ValueError(f"Target node {edge['target']} not found")
            edges.append(Edge(source, target))
        return edges

    def _build_nodes(self) -> List[Node]:
        nodes: List[Node] = []
        for node in self._nodes:
            node_data = node["data"]
            node_type: str = node_data["type"]  # type: ignore
            node_lc_type: str = node_data["node"]["template"]["_type"]  # type: ignore

            if node_type in prompt_creator.to_list():
                nodes.append(PromptNode(node))
            elif node_type in agent_creator.to_list():
                nodes.append(AgentNode(node))
            elif node_type in chain_creator.to_list():
                nodes.append(ChainNode(node))
            elif node_type in tool_creator.to_list() or node_lc_type in ALL_TOOLS_NAMES:
                if node_type in FILE_TOOLS:
                    nodes.append(FileToolNode(node))
                nodes.append(ToolNode(node))
            elif node_type in toolkits_creator.to_list():
                nodes.append(ToolkitNode(node))
            elif node_type in wrapper_creator.to_list():
                nodes.append(WrapperNode(node))
            elif node_type in llm_creator.to_list():
                nodes.append(LLMNode(node))
            else:
                nodes.append(Node(node))
        return nodes

    def get_children_by_node_type(self, node: Node, node_type: str) -> List[Node]:
        children = []
        node_types = [node.data["type"]]
        if "node" in node.data:
            node_types += node.data["node"]["base_classes"]
        if node_type in node_types:
            children.append(node)
        return children

import json
from typing import Type
from langchain.vectorstores import (
    Pinecone,
    Qdrant,
    Chroma,
    FAISS,
    Weaviate,
    SupabaseVectorStore,
)


def docs_in_params(params: dict) -> bool:
    """Check if params has documents OR texts and one of them is not an empty list,
    If any of them is not an empty list, return True, else return False"""
    return ("documents" in params and params["documents"]) or (
        "texts" in params and params["texts"]
    )


def initialize_supabase(class_object: Type[SupabaseVectorStore], params: dict):
    """Initialize supabase and return the class object"""
    from supabase.client import Client, create_client

    if "supabase_url" not in params or "supabase_service_key" not in params:
        raise ValueError("Supabase url and service key must be provided in the params")
    if "texts" in params:
        params["documents"] = params.pop("texts")

    client_kwargs = {
        "supabase_url": params.pop("supabase_url"),
        "supabase_key": params.pop("supabase_service_key"),
    }

    supabase: Client = create_client(**client_kwargs)
    if not docs_in_params(params):
        params.pop("documents", None)
        params.pop("texts", None)
        return class_object(client=supabase, **params)
    # If there are docs in the params, create a new index

    return class_object.from_documents(client=supabase, **params)


def initialize_weaviate(class_object: Type[Weaviate], params: dict):
    """Initialize weaviate and return the class object"""
    if not docs_in_params(params):
        import weaviate

        client_kwargs_json = params.get("client_kwargs", "{}")
        client_kwargs = json.loads(client_kwargs_json)
        client_params = {
            "url": params.get("weaviate_url"),
        }
        client_params.update(client_kwargs)
        weaviate_client = weaviate.Client(**client_params)

        new_params = {
            "client": weaviate_client,
            "index_name": params.get("index_name"),
            "text_key": params.get("text_key"),
        }
        weaviate = class_object(**new_params)
    # If there are docs in the params, create a new index
    if "texts" in params:
        params["documents"] = params.pop("texts")

    return class_object.from_documents(**params)


def initialize_faiss(class_object: Type[FAISS], params: dict):
    """Initialize faiss and return the class object"""

    if not docs_in_params(params):
        return class_object.load_local

    save_local = params.get("save_local")
    faiss_index = class_object(**params)
    if save_local:
        faiss_index.save_local(folder_path=save_local)
    return faiss_index


def initialize_pinecone(class_object: Type[Pinecone], params: dict):
    """Initialize pinecone and return the class object"""

    import pinecone

    PINECONE_API_KEY = params.get("pinecone_api_key")
    PINECONE_ENV = params.get("pinecone_env")

    if PINECONE_API_KEY is None or PINECONE_ENV is None:
        raise ValueError(
            "Pinecone API key and environment must be provided in the params"
        )

    # initialize pinecone
    pinecone.init(
        api_key=PINECONE_API_KEY,  # find at app.pinecone.io
        environment=PINECONE_ENV,  # next to api key in console
    )

    # If there are no docs in the params, return an existing index
    # but first remove any texts or docs keys from the params
    if not docs_in_params(params):
        existing_index_params = {
            "embedding": params.pop("embedding"),
        }
        if "index_name" in params:
            existing_index_params["index_name"] = params.pop("index_name")
        if "namespace" in params:
            existing_index_params["namespace"] = params.pop("namespace")

        return class_object.from_existing_index(**existing_index_params)
    # If there are docs in the params, create a new index
    if "texts" in params:
        params["documents"] = params.pop("texts")
    return class_object.from_documents(**params)


def initialize_chroma(class_object: Type[Chroma], params: dict):
    """Initialize a ChromaDB object from the params"""
    persist = params.pop("persist", False)
    if not docs_in_params(params):
        if "texts" in params:
            params["documents"] = params.pop("texts")
        for doc in params["documents"]:
            if doc.metadata is None:
                doc.metadata = {}
            for key, value in doc.metadata.items():
                if value is None:
                    doc.metadata[key] = ""
        chromadb = class_object.from_documents(**params)
    else:
        chromadb = class_object(**params)
    if persist:
        chromadb.persist()
    return chromadb


def initialize_qdrant(class_object: Type[Qdrant], params: dict):
    if not docs_in_params(params):
        if "location" not in params and "api_key" not in params:
            raise ValueError("Location and API key must be provided in the params")
        from qdrant_client import QdrantClient

        client_params = {
            "location": params.pop("location"),
            "api_key": params.pop("api_key"),
        }
        lc_params = {
            "collection_name": params.pop("collection_name"),
            "embeddings": params.pop("embedding"),
        }
        client = QdrantClient(**client_params)

        return class_object(client=client, **lc_params)

    return class_object.from_documents(**params)

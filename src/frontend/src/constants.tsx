// src/constants.tsx

/**
 * The base text for subtitle of Export Dialog (Toolbar)
 * @constant
 */
export const EXPORT_DIALOG_SUBTITLE = "Export your models.";

/**
 * The base text for subtitle of Flow Settings (Menubar)
 * @constant
 */
export const SETTINGS_DIALOG_SUBTITLE = "Edit details about your project.";

/**
 * The base text for subtitle of Code Dialog (Toolbar)
 * @constant
 */
export const CODE_DIALOG_SUBTITLE =
  "Export your flow to use it with this code.";

/**
 * The base text for subtitle of Edit Node Dialog
 * @constant
 */
export const EDIT_DIALOG_SUBTITLE =
  "Make configurations changes to your nodes. Click save when you're done.";

/**
 * The base text for subtitle of Code Dialog
 * @constant
 */
export const CODE_PROMPT_DIALOG_SUBTITLE = "Edit you python code.";

/**
 * The base text for subtitle of Prompt Dialog
 * @constant
 */
export const PROMPT_DIALOG_SUBTITLE = "Edit you prompt.";

/**
 * The base text for subtitle of Text Dialog
 * @constant
 */
export const TEXT_DIALOG_SUBTITLE = "Edit you text.";

/**
 * Function to get the python code for the API
 * @param {string} flowId - The id of the flow
 * @returns {string} - The python code
 */
export const getPythonApiCode = (flowId: string): string => {
  return `import requests

BASE_API_URL = "${window.location.protocol}//${window.location.host}/ap1/v1/predict"
FLOW_ID = "${flowId}"

def run_flow(message: str, flow_id: str, tweaks: dict = None) -> dict:
    """
    Run a flow with a given message and optional tweaks.

    :param message: The message to send to the flow
    :param flow_id: The ID of the flow to run
    :param tweaks: Optional tweaks to customize the flow
    :return: The JSON response from the flow
    """
    api_url = f"{BASE_API_URL}/{flow_id}"

    payload = {"message": message}

    if tweaks:
        payload["tweaks"] = tweaks

    response = requests.post(api_url, json=payload)
    return response.json()

# Setup any tweaks you want to apply to the flow
tweaks = {} # {"nodeId": {"key": "value"}, "nodeId2": {"key": "value"}}


print(run_flow("Your message", flow_id=FLOW_ID, tweaks=tweaks))`;
};
/**
 * Function to get the curl code for the API
 * @param {string} flowId - The id of the flow
 * @returns {string} - The curl code
 */
export const getCurlCode = (flowId: string): string => {
  return `curl -X POST \\
  ${window.location.protocol}//${window.location.host}/api/v1/predict/${flowId} \\
  -H 'Content-Type: application/json' \\
  -d '{"message": "Your message"}'`;
};
/**
 * Function to get the python code for the API
 * @param {string} flowName - The name of the flow
 * @returns {string} - The python code
 */
export const getPythonCode = (flowName: string): string => {
  return `from langflow import load_flow_from_json

    flow = load_flow_from_json("${flowName}.json")
    # Now you can use it like any chain
    flow("Hey, have you heard of LangFlow?")`;
};

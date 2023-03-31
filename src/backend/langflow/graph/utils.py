import base64
import json
from typing import Dict

import yaml


def load_dict(file_name, file_content, accepted_types) -> Dict:
    """Load a file from a string."""
    # Check if the file is accepted
    if not any(file_name.endswith(suffix) for suffix in accepted_types):
        raise ValueError(f"File {file_name} is not accepted")
    # Get the suffix
    suffix = file_name.split(".")[-1]
    # file_content == 'data:application/x-yaml;base64,b3BlbmFwaTogIjMuMC4wIg...'
    data = file_content.split(",")[1]
    decoded_bytes = base64.b64decode(data)

    # Convert the bytes object to a string
    decoded_string = decoded_bytes.decode("utf-8")
    if suffix == "json":
        # Return the json content
        return json.loads(decoded_string)
    elif suffix in ["yaml", "yml"]:
        # Return the yaml content
        return yaml.safe_load(decoded_string)

import os
import json
import tkinter as tk
from tkinter import filedialog

BASE_EARWAX_AUDIO_DIR = r"/content/EarwaxAudio/Audio/"
BASE_EARWAX_JET_FILE = r"/content/EarwaxAudio.jet"
BASE_EARWAX_SPECTRUM_DIR = r"/content/EarwaxAudio/Spectrum/"
TEMPLATE_SPECTRUM = r"/content/EarwaxAudio/Spectrum/Template.jet"
earwax_audio_jet = "C:\Program Files (x86)\Steam\steamapps\common\The Jackbox Party Pack 2\games\Earwax\content\EarwaxAudio.jet"

def add_new_object(file_path, name, audio_id, category):
    with open(file_path, 'r', encoding="utf-8") as file:
        data = json.load(file)
    new_obj = {
        "x": False,
        "name": name,
        "short": name,
        "id": audio_id,
        "categories": [category]
    }
    data['content'].append(new_obj)
    with open(file_path, 'w', encoding="utf-8") as file:
        json.dump(data, file, indent=4)

def find_template(earwax_dir) -> bool:
    """
    Finds a template inside the earwax directory , can be found anywhere
    :param earwax_dir: The base earwax directory
    :return: True
    """

    target = "Template.jet"
    for root, directories, files in os.walk(f"{earwax_dir}{BASE_EARWAX_SPECTRUM_DIR}"):
        if target in files:
            return True
        
def format_jet_file(file_path):
    # format the EarwaxAudio.jet file to proper .json format so I DON'T HAVE TO DO IT MANUALLY!
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    data = json.loads(content)
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=4)

def select_dir():
    root = tk.Tk()
    root.withdraw()
    folder_selected = filedialog.askdirectory()
    return folder_selected
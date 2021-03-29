import {handleRecord, handleSubmit} from "./scripts";

export const INTRO_SCREEN_TEMPLATE = document.querySelector('#intro-screen-template');
export const INPUT_SCRIPT_TEMPLATE = document.querySelector('#input-script-template');
export const LOADING_SCREEN = document.querySelector('#loading-screen');
export const OPTIMIZED_TEMPLATE = document.querySelector('#optimized-template');

export default function swapTemplates(template, params = null) {
    const body = document.querySelector('.body');
    body.innerHTML = template;


    if (template === INTRO_SCREEN_TEMPLATE || template === OPTIMIZED_TEMPLATE) {
        document.querySelector('#record-btn').addEventListener('keypress', e => {
            var key = e.which || e.keyCode;
            if (key === 13) handleRecord();
        });

        if (template === OPTIMIZED_TEMPLATE) {
            const words = document.querySelector('.words');
            words.innerHTML = params.text;

            const stutterWords = document.querySelector('.stutter');
            stutterWords.innerHTML = params.stutterList;
        } else {
            document.querySelector('#optimize-link').classList.remove('selected');
            document.querySelector('#retrain-link').classList.add('selected');
        }
    } else if (template === INPUT_SCRIPT_TEMPLATE) {
        document.addEventListener('keydown', e => {
            var key = e.which || e.keyCode;
            if (e.ctrlKey && key === 13) handleSubmit();
        });
        document.querySelector('#retrain-link').classList.remove('selected');
        document.querySelector('#optimize-link').classList.add('selected');
    } else if (template === LOADING_SCREEN) {
        document.querySelector('#loading-text').innerHTML = params.text;
    }
}

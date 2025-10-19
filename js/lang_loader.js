
document.addEventListener("DOMContentLoaded", assign_buttons);

main("languages/index.json", "en");

async function main(file_path, lang) {
    await get_json(file_path, lang);
}

async function get_json(file_path, lang) {
    var lang_data = await fetch_json(file_path, lang);
    /*Cambiar contenido de los elementos */
    await find_elements_by_id(lang_data);
}

async function fetch_json(target_string, target_lang) {
    try {
        const res = await fetch(target_string);
        const json = await res.json();

        return json[target_lang];
    } catch (error) {
        console.log(error);
    }
}

async function find_elements_by_id(id_data) {
    const key_names = Object.keys(id_data);

    for (let index = 0; index < key_names.length; index++) {
        const current_key = key_names[index];
        const found_item = document.getElementById(current_key);

        if (found_item) {

            // --- LÓGICA ACTUALIZADA ---

            // 1. Si es un input de tipo "submit"
            if (found_item.tagName === 'INPUT' && found_item.type === 'submit') {
                found_item.value = id_data[current_key];

                // 2. Si es cualquier otro input o un textarea
            } else if (found_item.tagName === 'INPUT' || found_item.tagName === 'TEXTAREA') {
                found_item.placeholder = id_data[current_key];

                // 3. Para todo lo demás (h2, p, etc.)
            } else {
                found_item.textContent = id_data[current_key];
            }
            // --- FIN DE LA LÓGICA ---

        } else {
            console.warn(`Advertencia: No se encontró ningún elemento con el id "${current_key}"`);
        }
    }
}
/*Botones de lenguaje*/
function assign_buttons() {
    /*Boton ingles */
    const boton_en = document.getElementById("lang_button_en");
    boton_en.addEventListener('click', function (event) {
        main('languages/index.json', 'en');
    });
    boton_en.addEventListener('touchend', function (event) {
        main('languages/index.json', 'en');
    });

    /*Boton español */
    const boton_es = document.getElementById("lang_button_es");
    boton_es.addEventListener('click', function (event) {
        main('languages/index.json', 'es');
    });

    boton_es.addEventListener('touchend', function (event) {
        main('languages/index.json', 'es');
    });
    /*Boton frances */
    const boton_fr = document.getElementById("lang_button_fr");
    boton_fr.addEventListener('click', function (event) {
        main('languages/index.json', 'fr');
    });
    boton_fr.addEventListener('touchend', function (event) {
        main('languages/index.json', 'fr');
    });

    /*Boton portugues */
    const boton_pt = document.getElementById("lang_button_pt");
    boton_pt.addEventListener('click', function (event) {
        main('languages/index.json', 'pt');
    });
    boton_pt.addEventListener('touchend', function (event) {
        main('languages/index.json', 'pt');
    });
}
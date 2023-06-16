// SPDX-FileCopyrightText: 2022 Félix Robles <felix@sequentech.io>
//
// SPDX-License-Identifier: AGPL-3.0-only
import {TranslationType} from "./en"

const spanishTranslation: TranslationType = {
    translations: {
        language: "Español",
        welcome: "Let's start: Import auditable ballot..",
        homeScreen: {
            title: "Verificador de Voto Sequent",
            description1:
                "El verificador de voto se usa cuando el votante elige auditar la boleta en la cabina de votación. La verificación debe tomar de 1 a 2 minutos.",
            description2:
                "El verificador de voto le permite al votante asegurarse de que el voto cifrado capture correctamente las selecciones realizadas en la cabina de votación. Permitir realizar esta verificación se denomina verificabilidad de transmisión según lo previsto y evita errores y actividades maliciosas durante el cifrado del voto.",
            descriptionMore: "Más información",
            startButton: "Selecciona fichero",
            dragDropOption: "O arrastre el fichero aquí",
            importErrorDescription:
                "Hubo un problema al importar el voto auditable. ¿Elegiste el archivo correcto?",
            importErrorMoreInfo: "Más información",
            importErrorTitle: "Error",
            useSampleText: "¿No tiene un voto verificable?",
            useSampleLink: "Use un voto verificable de ejemplo",
        },
        confirmationScreen: {
            title: "Verificador de Voto Sequent",
            topDescription1:
                "En base a la información del voto auditable importado, calculamos que:",
            topDescription2: "Si este ID de voto es mostrado en la Cabina de Votación:",
            bottomDescription1:
                "Su voto fue cifrado correctamente. Ahora puede cerrar esta ventana y volver a la Cabina de Votación.",
            bottomDescription2:
                "Si no coinciden, haga clic aquí para obtener más información sobre los posibles motivos y las acciones que puede tomar.",
            ballotChoicesDescription: "Y sus selecciones de voto son:",
            helpAndFaq: "Ayuda y Preguntas Frecuentes",
            backButton: "Atrás",
            markedInvalid: "Voto explícitamente marcado inválido",
        },
        ballotSelectionsScreen: {
            statusModal: {
                title: "Estado",
                content:
                    "El panel de estado te da información sobre las verificaciones realizadas.",
                ok: "OK",
            },
        },
        poweredBy: "Funciona con",
        errors: {
            encoding: {
                notEnoughChoices: "No hay suficientes opciones para decodificar",
                writeInChoiceOutOfRange: "Opción de voto escrita fuera de rango: {{index}}",
                writeInNotEndInZero: "Opción de voto escrita no finaliza en 0",
                bytesToUtf8Conversion:
                    "Error convirtiendo bytes de opción de voto escrita a cadena UTF-8: {{errorMessage}}",
                ballotTooLarge: "Voto más grande de lo esperado",
            },
            implicit: {
                selectedMax:
                    "El número de opciones seleccionadas {{numSelected}} es mayor que el máximo {{max}}",
                selectedMin:
                    "El número de opciones seleccionadas {{numSelected}} es menor que el máximo {{min}}",
            },
            explicit: {
                notAllowed:
                    "Voto marcado explícitamente como inválido pero la pregunta no lo permite",
            },
        },
        version: {
            header: "Versión:",
        },
        logout: {
            buttonText: "cerrar sesión",
            modal: {
                title: "¿Estás seguro de que quieres cerrar sesión?",
                content:
                    "Está a punto de cerrar esta aplicación. Esta acción no se puede deshacer.",
                ok: "OK",
                close: "Cerrar",
            },
        },
        stories: {
            openDialog: "Abrir Diálogo",
        },
        dragNDrop: {
            firstLine: "Arrastrar y soltar ficheros o",
            browse: "Cargar fichero",
            format: "Formatos soportados: json",
        },
    },
}

export default spanishTranslation

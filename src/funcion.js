import CryptoJS from 'crypto-js'; 

export const cifrarTexto = (texto, clave) => {
    if (texto && clave) {
        const textoCifrado = CryptoJS.AES.encrypt(texto, clave).toString();
        return textoCifrado;
    } else {
        return null; 
    }
};

export const desCifrarTexto = (textoCifrado, clave) => {
    if (textoCifrado && clave) {
        try {
            const bytes = CryptoJS.AES.decrypt(textoCifrado, clave);
            const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
            return textoDescifrado;
    } catch (error) {
        return null; 
    }
    } else {
        return null; 
    }
};
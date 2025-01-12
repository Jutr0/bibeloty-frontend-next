import axios from "@/utils/axios";

export const get = async (url, params) => {
    const config = {
        url,
        params,
    };
    const result = await axios.request(config);
    return result.data;
};


export const save = async (url, method, data, onError) => {
    const config = {
        url,
        data,
        method
    };
    try {
        const result = await axios.request(config);
        return result.data;
    } catch (e) {
        if (onError) {
            onError(e);
        } else {
            throw e;
        }
    }
};

export const remove = async (url, onError) => {
    const config = {
        url,
        method: "DELETE",
    };
    try {
        const result = await axios.request(config);
        return result.data;
    } catch (e) {
        if (onError) {
            onError(e);
        } else {
            throw e;
        }
    }
};


export const buildActions = (resourceName, url) => {
    let apiUrl = url || resourceName + "s";

    const getAll = () => get(apiUrl);

    const getOne = (id) => get(`${apiUrl}/${id}`);

    const saveResource = (resource) => {
        let method = "POST";
        let saveUrl = apiUrl;
        if (resource.id) {
            saveUrl += `/${resource.id}`;
            method = "PUT";
        }
        return save(saveUrl, method, {[resourceName]: resource});
    };

    const removeResource = (resource, onError) => {
        const removeUrl = `${apiUrl}/${resource.id}`;
        return remove(removeUrl, onError);
    };

    return {getAll, getOne, save: saveResource, remove: removeResource};
};

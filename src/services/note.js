import axios from "axios";

export const fetchNotes = async (filter) => {
    try {
        const response = await axios.get("http://localhost:5074/api/Notes", {
            params: {
                search: filter?.search || "",
                sortItem: filter?.sortItem || "",
                sortOrder: filter?.sortOrder || "asc",
            },
        });

        return response.data.notes || [];
    } catch (e) {
        console.error("Error fetching notes:", e);
        return [];
    }
};

export const createNote = async (note) => {
    try {
        const response = await axios.post("http://localhost:5074/api/Notes", note);

        return response.status;
    } catch (e) {
        console.error("Error fetching notes:", e);
        return [];
    }
};
const supabase = require('../supabaseClient');

// Métodos CRUD para `departamento`
const Departamento = {
    async createDepartamento(nombre) {
        const { data, error } = await supabase.from('departamento').insert([{ nombre }]);
        if (error) throw error;
        return data;
    },

    async getDepartamentos() {
        const { data, error } = await supabase.from('departamento').select('*');
        if (error) throw error;
        return data;
    },

    async getDepartamentoById(id) {
        const { data, error } = await supabase.from('departamento').select('*').eq('id', id).single();
        if (error) throw error;
        return data;
    },

    async updateDepartamento(id, nombre) {
        const { data, error } = await supabase.from('departamento').update({ nombre }).eq('id', id);
        if (error) throw error;
        return data;
    },

    async deleteDepartamento(id) {
        const { data, error } = await supabase.from('departamento').delete().eq('id', id);
        if (error) throw error;
        return data;
    }
};

module.exports = Departamento;

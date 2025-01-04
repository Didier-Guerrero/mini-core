const supabase = require('../supabaseClient');

// Métodos CRUD para `empleado`
const Empleado = {
    async createEmpleado(nombre) {
        const { data, error } = await supabase.from('empleado').insert([{ nombre }]);
        if (error) throw error;
        return data;
    },

    async getEmpleados() {
        const { data, error } = await supabase.from('empleado').select('*');
        if (error) throw error;
        return data;
    },

    async getEmpleadoById(id) {
        const { data, error } = await supabase.from('empleado').select('*').eq('id', id).single();
        if (error) throw error;
        return data;
    },

    async updateEmpleado(id, nombre) {
        const { data, error } = await supabase.from('empleado').update({ nombre }).eq('id', id);
        if (error) throw error;
        return data;
    },

    async deleteEmpleado(id) {
        const { data, error } = await supabase.from('empleado').delete().eq('id', id);
        if (error) throw error;
        return data;
    }
};

module.exports = Empleado;

const supabase = require('../supabaseClient');

// Métodos CRUD para `gastos`
const Gastos = {
    async createGasto(monto, fecha, empleado_id, departamento_id) {
        const { data, error } = await supabase
            .from('gastos')
            .insert([{ monto, fecha, empleado_id, departamento_id }]);
        if (error) throw error;
        return data;
    },

    async getGastos() {
        const { data, error } = await supabase
            .from('gastos')
            .select('*, empleado(nombre), departamento(nombre)');
        if (error) throw error;
        return data;
    },

    async getGastosByDateRange(fechaInicio, fechaFin) {
        const { data, error } = await supabase
            .from('gastos')
            .select('*, empleado(nombre), departamento(nombre)')
            .gte('fecha', fechaInicio)
            .lte('fecha', fechaFin);
        if (error) throw error;
        return data;
    },

    async updateGasto(id, monto, fecha, empleado_id, departamento_id) {
        const { data, error } = await supabase
            .from('gastos')
            .update({ monto, fecha, empleado_id, departamento_id })
            .eq('id', id);
        if (error) throw error;
        return data;
    },

    async deleteGasto(id) {
        const { data, error } = await supabase.from('gastos').delete().eq('id', id);
        if (error) throw error;
        return data;
    }
};

module.exports = Gastos;

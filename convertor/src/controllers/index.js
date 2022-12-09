const Moeda = require('../models/index')

module.exports = {
    converter: async (req,res) => {
        const { tipoMoeda, valor } = req.body;
        let valorReal = 0;
        try {
            if (tipoMoeda == "dolar"){
                valorReal = valor * 5.23;
            } else if (tipoMoeda == "euro"){
                valorReal = valor * 5.51;
            }
            const convertor = await Moeda.create({
                tipoMoeda:tipoMoeda,
                valor:valor,
                valorReal:valorReal
            })
            return res.status(200).json(convertor)
        } catch (err){
            return res.status(400).json({ error: err.message });
        }
    }
}
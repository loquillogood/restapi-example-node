import Router from 'express';
var router= Router();

router.get('/test', (req, res) => {
    const data= {
        "name": "Francisco Martin",
        "apellido1": "Morales",
        "apellido2": "Núñez"
    };
    res.json(data);
});

export default router;
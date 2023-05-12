const notFound= (req,res)=>res.status(404).send('Route does nor exist');

module.exports = notFound;
const service = require('./client.service');

async function list(req, res, next) {
  try {
    const search = req.query.search || '';
    const data = await service.getAllClients(search);
    res.json({ data });
  } catch (err) { next(err); }
}

async function detail(req, res, next) {
  try {
    const data = await service.getClientById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Not found' });
    res.json({ data });
  } catch (err) { next(err); }
}

async function create(req, res, next) {
  try {
    const data = await service.createClient(req.body);
    res.status(201).json({ data });
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const data = await service.updateClient(req.params.id, req.body);
    res.json({ data });
  } catch (err) { next(err); }
}

async function remove(req, res, next) {
  try {
    await service.deleteClient(req.params.id);
    res.json({ deleted: true });
  } catch (err) { next(err); }
}

module.exports = { list, detail, create, update, remove };

const { prisma } = require('../../db/prisma');

async function getAllClients(search = '') {
  const where = search ? {
    OR: [
      { name:  { contains: search,} },
      { email: { contains: search,} },
      { job:   { contains: search,} },
    ],
  } : {};
  return prisma.client.findMany({ where, orderBy: { createdAt: 'desc' } });
}

async function getClientById(id) {
  return prisma.client.findUnique({ where: { id: Number(id) } });
}

async function createClient(data) {
  return prisma.client.create({ data });
}

async function updateClient(id, data) {
  return prisma.client.update({ where: { id: Number(id) }, data });
}

async function deleteClient(id) {
  return prisma.client.delete({ where: { id: Number(id) } });
}

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
};

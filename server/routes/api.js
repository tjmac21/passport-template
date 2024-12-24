const express = require('express');
const db = require('../database/db');
const router = express.Router();

/**
 * Get all sessions
 * @route GET /api/sessions
 * @returns {Array} 200 - An array of sessions
 * @returns {Error} 500 - Internal server error
 */
router.get('/sessions', async (req, res) => {
    try {
        const sessions = await db.query('sessions', { columns: '*' });
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Get a single session
 * @route GET /api/sessions/:id
 * @returns {Object} 200 - A single session
 * @returns {Error} 500 - Internal server error
 */
router.get('/sessions/:id', async (req, res) => {
    try {
        const session = await db.query('sessions', { columns: '*', match: { id: req.params.id } });
        res.json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Get a single profile
 * @route GET /api/profile/:id
 * @returns {Object} 200 - A single profile
 * @returns {Error} 500 - Internal server error
 */
router.get('/profile/:id', async (req, res) => {
    try {
        const profile = await db.query('profile', { columns: '*' });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Get a single profile
 * @route GET /api/profile/:id
 * @returns {Object} 200 - A single profile
 * @returns {Error} 500 - Internal server error
 */
router.get('/profile/:id', async (req, res) => {
    try {
        const profile = await db.query('profile', { columns: '*', match: { id: req.params.id } });
        res.json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Get all sessions for a company
 * @route GET /api/companies/:id/sessions
 * @returns {Array} 200 - An array of sessions
 * @returns {Error} 500 - Internal server error
 */
router.get('/companies/:id/sessions', async (req, res) => {
    try {
        const sessions = await db.query('sessions', { columns: '*', match: { companyId: req.params.id } });
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Get a single session for a company
 * @route GET /api/companies/:id/sessions/:sessionId
 * @returns {Object} 200 - A single session
 * @returns {Error} 500 - Internal server error
 */
router.get('/companies/:id/sessions/:sessionId', async (req, res) => {
    try {
        const session = await db.query('sessions', { columns: '*', match: { id: req.params.sessionId, companyId: req.params.id } });
        res.json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Create a session for a company
 * @route POST /api/companies/:id/sessions
 * @returns {Object} 200 - A single session
 * @returns {Error} 500 - Internal server error
 */
router.post('/companies/:id/sessions', async (req, res) => {
    const session = req.body;   
    session.companyId = req.params.id;
    try {
        const booking = await db.insert('sessions', session);
        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Update a session for a company
 * @route PUT /api/companies/:id/sessions/:sessionId
 * @returns {Object} 200 - A single session
 * @returns {Error} 500 - Internal server error
 */
router.put('/companies/:id/sessions/:sessionId', async (req, res) => {
    const session = req.body;
    session.companyId = req.params.id;
    try {
        const session = await db.update('sessions', req.params.sessionId, session);
        res.json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Delete a session for a company
 * @route DELETE /api/companies/:id/sessions/:sessionId
 * @returns {Object} 200 - A single session
 * @returns {Error} 500 - Internal server error
 */
router.delete('/companies/:id/sessions/:sessionId', async (req, res) => {
    try {
        await db.delete('sessions', req.params.sessionId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
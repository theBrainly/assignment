
// \Expose an endpoint that takes configurationId as params
import { User } from "../models/user.model.js";

const handleConfiguration = async (req, res) => {
    const configurationId = req.params.id;
    // condition to check if id is valid or not
    if (!configurationId) {
        return res.status(400).send({ error: 'Invalid configuration ID' });
    }
    // now i need to check in my database if id is present or not
    try {
        const user = await User.findOne({ configID: configurationId });
        if (!user) {
            return res.status(404).send({ error: 'Configuration not found' });
        }
        return res.send({ twoDData: user.data });
    } catch (error) {
        return res.status(500).send({ error: 'Database error' });
    }
};

const handleConfigurationRemark = async (req, res) => {
    const configurationId = req.params.id;
    const { newRemark } = req.body;

    if (!configurationId || !newRemark) {
        return res.status(400).send({ error: 'Invalid input' });
    }

    try {
        const user = await User.findOneAndUpdate(
            { configID: configurationId },
            { remark: newRemark },
            { new: true }
        );

        if (!user) {
            return res.status(404).send({ error: 'Configuration not found' });
        }

        return res.send({ message: 'success', user });
    } catch (error) {
        return res.status(500).send({ error: 'Database error' });
    }
};

export { handleConfiguration, handleConfigurationRemark };
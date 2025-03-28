import { API_URL } from '@/api_url';
import pino from 'pino';

const logger = pino({
    browser: {
        transmit: {
            level: "error",
            send: async (level, logEvent) => {
                try {
                    await fetch(`${API_URL}/log/frontend`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(logEvent),
                    });
                } catch (error) {
                    console.error("Erreur lors de l'envoi du log au backend", error);
                }
            },
        },
    },
});

export default logger;
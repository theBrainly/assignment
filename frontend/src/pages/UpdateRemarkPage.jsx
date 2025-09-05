import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const UpdateRemarkPage = () => {
    const [updateConfigId, setUpdateConfigId] = useState('');
    const [remark, setRemark] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = () => {
        if (!updateConfigId.trim()) {
            setError('Please enter a Configuration ID');
            return;
        }

        if (!remark.trim()) {
            setError('Please enter a remark');
            return;
        }

        setLoading(true);
        setError(null);
        setSuccess(null);

        axios.put(`http://localhost:8080/api/configurations/${updateConfigId}`, {
            newRemark: remark
        })
            .then(response => {
                console.log("Update Result:", response.data);
                setSuccess('Configuration updated successfully!');
                setRemark(''); // Clear the remark field after success
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error updating the configuration!", error);
                setError(error.response?.data?.message || 'Failed to update configuration');
                setLoading(false);
            });
    }

    // Styles
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        },
        header: {
            textAlign: 'center',
            marginBottom: '30px',
            color: '#333'
        },
        title: {
            fontSize: '28px',
            margin: '0 0 10px 0'
        },
        subtitle: {
            fontSize: '16px',
            fontWeight: 'normal',
            color: '#666'
        },
        card: {
            background: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            marginBottom: '20px'
        },
        formGroup: {
            marginBottom: '15px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        input: {
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box'
        },
        textarea: {
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            minHeight: '120px',
            boxSizing: 'border-box',
            fontFamily: 'Arial, sans-serif'
        },
        button: {
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            fontSize: '16px',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%'
        },
        buttonHover: {
            backgroundColor: '#3a80d2'
        },
        loading: {
            opacity: 0.7,
            cursor: 'not-allowed'
        },
        error: {
            color: '#e74c3c',
            marginTop: '10px'
        },
        success: {
            color: '#2ecc71',
            marginTop: '10px'
        },
        footer: {
            textAlign: 'center',
            marginTop: '30px',
            color: '#666',
            fontSize: '14px'
        }
    };

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Update Configuration Remark</h1>
                <p style={styles.subtitle}>Enter a configuration ID and remark to update</p>
            </header>

            <div style={styles.card}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="configId">Configuration ID:</label>
                    <input
                        id="configId"
                        style={styles.input}
                        type="text"
                        placeholder="Enter Configuration ID to update"
                        value={updateConfigId}
                        onChange={(e) => setUpdateConfigId(e.target.value)}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="remark">Remark:</label>
                    <textarea
                        id="remark"
                        style={styles.textarea}
                        placeholder="Enter remark text (e.g., I am done with task)"
                        value={remark}
                        onChange={(e) => setRemark(e.target.value)}
                    />
                </div>

                <button
                    style={{
                        ...styles.button,
                        ...(loading ? styles.loading : {})
                    }}
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Updating...' : 'Submit'}
                </button>

                {error && <div style={styles.error}>{error}</div>}
                {success && <div style={styles.success}>{success}</div>}
            </div>

            <footer style={styles.footer}>
                <p>Backend API Base URL: http://localhost:8080</p>
            </footer>
        </div>
    );
}

export default UpdateRemarkPage
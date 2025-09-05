import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const FetchConfigPage = () => {
    const [configDetails, setConfigDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [configId, setConfigId] = useState('');

    const handleSubmit = () => {
        if (!configId.trim()) {
            setError('Please enter a Configuration ID');
            return;
        }

        setLoading(true);
        setError(null);

        axios.get(`http://localhost:8080/api/configurations/${configId}`)
            .then(response => {
                console.log("Configuration Details:", response.data);
                setConfigDetails(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the configuration!", error);
                setError(error.response?.data?.message || 'Failed to fetch configuration');
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
        resultContainer: {
            marginTop: '20px'
        },
        resultHeader: {
            borderBottom: '1px solid #eee',
            paddingBottom: '10px',
            marginBottom: '15px'
        },
        preFormatted: {
            background: '#f9f9f9',
            padding: '15px',
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '14px'
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
                <h1 style={styles.title}>Configuration Fetcher</h1>
                <p style={styles.subtitle}>Enter a configuration ID to fetch data from the API</p>
            </header>

            <div style={styles.card}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="configId">Configuration ID:</label>
                    <input
                        id="configId"
                        style={styles.input}
                        type="text"
                        placeholder="Enter Configuration ID"
                        value={configId}
                        onChange={(e) => setConfigId(e.target.value)}
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
                    {loading ? 'Loading...' : 'Submit'}
                </button>

                {error && <div style={styles.error}>{error}</div>}
            </div>

            {configDetails && (
                <div style={styles.card}>
                    <div style={styles.resultHeader}>
                        <h3>Configuration Details:</h3>
                    </div>
                    <pre style={styles.preFormatted}>{JSON.stringify(configDetails, null, 2)}</pre>

                    {/* If it's a 2D array, render as a table */}
                    {Array.isArray(configDetails) && Array.isArray(configDetails[0]) && (
                        <div style={{ marginTop: '20px' }}>
                            <h4>Formatted View:</h4>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    marginTop: '10px',
                                    textAlign: 'center'
                                }}>
                                    <tbody>
                                        {configDetails.map((row, rowIndex) => (
                                            <tr key={rowIndex}>
                                                {row.map((cell, cellIndex) => (
                                                    <td
                                                        key={cellIndex}
                                                        style={{
                                                            border: '1px solid #ddd',
                                                            padding: '8px',
                                                            backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : 'white'
                                                        }}
                                                    >
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <footer style={styles.footer}>
                <p>Backend API Base URL: http://localhost:8080</p>
            </footer>
        </div>
    )
}

export default FetchConfigPage
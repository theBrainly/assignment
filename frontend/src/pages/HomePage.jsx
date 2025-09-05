import React from 'react';
import { Link } from 'react-router-dom';
import { API } from '../config/api';

const HomePage = () => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '50px'
    },
    title: {
      fontSize: '32px',
      margin: '0 0 10px 0',
      color: '#333'
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: 'normal',
      color: '#666',
      margin: '0 0 20px 0'
    },
    tasksContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap'
    },
    taskCard: {
      flex: '1 1 300px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      padding: '25px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit'
    },
    taskCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)'
    },
    taskTitle: {
      fontSize: '20px',
      marginTop: '0',
      marginBottom: '15px',
      color: '#333'
    },
    taskDescription: {
      color: '#666',
      lineHeight: '1.5'
    },
    footer: {
      textAlign: 'center',
      marginTop: '60px',
      color: '#666',
      fontSize: '14px'
    }
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.15)';
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>CodeRower Assignment</h1>
        <p style={styles.subtitle}>Full-Stack Software Developer Trainee</p>
      </header>

      <div style={styles.tasksContainer}>
        <Link to="/fetchConfiguration" style={styles.taskCard} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <h2 style={styles.taskTitle}>Task 1: Fetch Configuration</h2>
          <p style={styles.taskDescription}>
            Enter a configuration ID to fetch and display the 2D array data.
            This demonstrates API GET requests and data presentation.
          </p>
        </Link>

        <Link to="/updateRemark" style={styles.taskCard} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <h2 style={styles.taskTitle}>Task 2: Update Remark</h2>
          <p style={styles.taskDescription}>
            Update the remark for a specific configuration ID.
            This demonstrates API PUT requests and form handling.
          </p>
        </Link>
      </div>

      <footer style={styles.footer}>
        <p>Backend API Base URL: {API.baseUrl}</p>
        <p>Make sure your backend server is running</p>
      </footer>
    </div>
  );
};

export default HomePage;

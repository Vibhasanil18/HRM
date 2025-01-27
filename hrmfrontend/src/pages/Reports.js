import React from 'react';
import { generateReport } from '../services/api';

const Reports = () => {
  const handleGenerateReport = (reportType) => {
    generateReport(reportType);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px',
      background: 'linear-gradient(to right, #5E0669, #1ACAF2)',
      borderRadius: '15px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
      marginTop: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    description: {
      textAlign: 'center',
      marginBottom: '40px',
      fontSize: '1.2rem',
      color: '#FFFFFF',
      lineHeight: '1.6',
    },
    cardsContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
    },
    card: {
      background: '#FFFFFF',
      borderRadius: '15px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      textAlign: 'center',
      maxWidth: '300px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#3A9D8C',
      marginBottom: '15px',
    },
    cardDescription: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#F1D100',
      color: '#000',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '1rem',
      letterSpacing: '1px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#E1C200',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Generate Reports</h2>
      <p style={styles.description}>
        Select a report type to generate detailed insights on employee data and performance.
      </p>

      <div style={styles.cardsContainer}>
        {['Employee', 'Payroll', 'Leave'].map((type) => (
          <div
            key={type}
            style={styles.card}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, styles.cardHover);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, styles.card);
            }}
          >
            <h3 style={styles.cardTitle}>{`${type} Report`}</h3>
            <p style={styles.cardDescription}>
              {`Generate reports for ${type.toLowerCase()} data and performance tracking.`}
            </p>
            <button
              style={styles.button}
              onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              onClick={() => handleGenerateReport(type.toLowerCase())}
            >
              Generate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;

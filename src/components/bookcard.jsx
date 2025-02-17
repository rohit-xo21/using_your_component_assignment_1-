import React from 'react';

const BookCard = ({ id, image, name, genre, author }) => {
  const styles = {
    card: {
      width: "275px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out",
      background: "white",
      margin: "16px",
      textAlign: "center",
      height: "475px",
    },
    image: {
      width: "95%",
      height: "80%",
      objectFit: "cover",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      margin: "5px 0",
      color: "#333",
    },
    author: {
      fontSize: "14px",
      color: "#555",
      margin: "5px 0",
    },
    description: {
      fontSize: "12px",
      color: "#777",
      marginTop: "5px",
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={styles.card} id={id}>
        <img src={image} alt={name} style={styles.image} />
        <div style={{ padding: "0 10px" }}>
          <div style={styles.title}>{name}</div>
          <div style={styles.author}>{author}</div>
          <div style={styles.description}>{genre}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
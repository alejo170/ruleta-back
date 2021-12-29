module.exports = (sequelize, DataTypes) => {
    const Apuestas = sequelize.define("Apuestas", {

      monto: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },

      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      pago: {
        type: DataTypes.DOUBLE,
        allowNull: false,
                
      },
      
      id_ronda: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },

      id_jugador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },

      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      
    },
    {timestamps: false,}
    
    );
      
     
    return Apuestas;
  };
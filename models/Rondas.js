module.exports = (sequelize, DataTypes) => {
    const Rondas = sequelize.define("Rondas", {

      total_apuesta: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },

      resultado: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      total_a_pagar: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        
        
      },
      
            
    },
    {timestamps: false,}
    
    );
      
    Rondas.associate = (models) => {
      Rondas.hasMany(models.Apuestas, {
        foreignKey: 'id_ronda',
        onDelete: "cascade",
      });
    };    
    
    return Rondas;
  };
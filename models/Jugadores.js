module.exports = (sequelize, DataTypes) => {
    const Jugadores = sequelize.define("Jugadores", {

      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      identificador: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      dinero: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: '10000',
        
      },
      
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'activo',
      },
      
    },
    {timestamps: false,}
    
    );
      
    Jugadores.associate = (models) => {
      Jugadores.hasMany(models.Apuestas, {
        foreignKey: 'id_jugador',
        onDelete: "cascade",
      });
    };    
    
    return Jugadores;
  };
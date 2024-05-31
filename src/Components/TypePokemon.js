import "../style/TypePoke.css"

function TypePokemon(props) {

    let types = props.types
    return (
      <>
        {
          types.map(type => (
              <>
                <div className={type.type.name}>
                  {type.type.name}
                </div>
              </>
          ))
        }
      </>
    );
  }
  
  export default TypePokemon;
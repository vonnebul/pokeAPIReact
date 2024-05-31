import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../style/MonPokedex.css"
import Card from 'react-bootstrap/Card';
import TypePokemon from './TypePokemon';


function MonPokedex() {
    const serv = "https://pokeapi.co/api/v2/pokemon/"
    const url= serv+ ""
    const [pokeRecherche, setPokeRecherche] = useState();
    const [affichePokemon, setAffichePokemon]= useState(null);
    const [storagePokemon, setStoragePokemon]= useState()

    const recherche = async(e)=>{
      console.log(pokeRecherche)
      setAffichePokemon(null)
      e.preventDefault()
      const res = await axios.get(url+pokeRecherche)
      setAffichePokemon(res.data)
    }
    const ajout = async(e)=>{
      e.preventDefault()
      if(localStorage.getItem('MonPokedex')==null){
        localStorage.setItem('MonPokedex', JSON.stringify([]))
      }
      let test = JSON.parse(localStorage.getItem('MonPokedex'))
      test.push(affichePokemon)
      localStorage.setItem('MonPokedex', JSON.stringify(test))
      setAffichePokemon(null)
      setStoragePokemon(JSON.parse(localStorage.getItem('MonPokedex')))
    }
    const deletePokedex= (e)=>{
      e.preventDefault()
      localStorage.removeItem('MonPokedex')
      setStoragePokemon(JSON.parse(localStorage.getItem('MonPokedex')))
    }
    useEffect(()=>{
      setStoragePokemon(JSON.parse(localStorage.getItem('MonPokedex')))
    },[])

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <Form className="espacement" onSubmit={recherche}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Entrez le pokemon a rechercher</Form.Label>
                <Form.Control type="text" placeholder="nom ou n°pokédex" onChange={(e)=> setPokeRecherche(e.target.value)}/>
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Rechercher
              </Button>
            </Form>
            { affichePokemon == null || affichePokemon == "" ? 
            <>
              <h5>Aucun Pokemon Sélectionné</h5>
            </>
            : 
            <>             
            <Card>
                  <Card.Img variant="top" src={affichePokemon.sprites.front_default} />
                  <Card.Body>
                    <Card.Title>{affichePokemon.name}</Card.Title>
                    <Card.Text>
                      <p>n°{affichePokemon.id}</p>
                      <TypePokemon types={affichePokemon.types}/>
                    </Card.Text>
                    <Form className="espacement" onSubmit={ajout}>
                      <Button variant="outline-primary" type="submit">
                        Ajouter au pokédex
                      </Button>
                    </Form>
                  </Card.Body>            
              </Card>
            </>}
          </div>
          <div className="col-8 auto">
              {storagePokemon != null ?
              <>
               <div className='row'>
                {storagePokemon.map((pokemon)=>(
                  <div className='col-3'>
                  <Card>
                      <Card.Img variant="top" src={pokemon.sprites.front_default} />
                      <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                          <p>n°{pokemon.id}</p>
                          <TypePokemon types={pokemon.types}/>
                        </Card.Text>
                      </Card.Body>            
                  </Card>
                </div>
                ))}
                </div>
                <div className='row mt-3'>
                <Form className="espacement" onSubmit={deletePokedex}>
                  <Button variant="outline-danger" type="submit">
                        vider le pokedex
                  </Button>
                  </Form>
                </div>
                </>
              : <h4>Rien dans votre pokédex</h4>}
          </div>
        </div>
      </div>
    );
  }
  
  export default MonPokedex;
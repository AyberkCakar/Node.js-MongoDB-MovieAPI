const chaiHttp = require('chai-http');
const chai = require('chai');
const should =chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token,movieID;

describe('/api/movies tests', () => {
    before((done) => {
        chai.request(server)
            .post('/authenticate')
            .send({username: 'Ayberk1', password: '12345'})
            .end((err, res) => {
                token = res.body.token;
                done();
            });
    });

    describe('GET movies', () => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
                .get('/api/movies')
                .set('x-access-token',token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array'); // Dönen değerler (body) bir array olmalı
                    done();
                });
        })
    });

    describe('/POST movie', () => {
       it('it should POST a movie', (done) =>{
           const movie ={
             title:'Udemy',
             director_id: '5e24da105fd5cf49e85104e8',
             category: 'Komedi',
             country: 'Türkiye',
             year: 1950,
             imdb_score: 8
          };

           chai.request(server)
               .post('/api/movies')
               .send(movie)
               .set('x-access-token',token)
               .end((err,res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('director_id');
                  res.body.should.have.property('category');
                  res.body.should.have.property('country');
                  res.body.should.have.property('year');
                  res.body.should.have.property('imdb_score');
                  movieID = res.body._id;
                  done();
               });
       });
    });

    describe('/GET:movie_id movie', () =>{
       it('it should GET a movie by the given id', (done) =>{
           chai.request(server)
               .get('/api/movies/'+movieID)
               .set('x-access-token', token)
               .end((err,res) =>{
                   res.should.have.status(200);
                   res.body.should.be.a('object');
                   res.body.should.have.property('title');
                   res.body.should.have.property('director_id');
                   res.body.should.have.property('category');
                   res.body.should.have.property('country');
                   res.body.should.have.property('year');
                   res.body.should.have.property('imdb_score');
                   res.body.should.have.property('_id').eql(movieID);
                   done();
               })
       });
    });

    describe('/PUT movie', () => {
        it('it should UPDATE a movie given by id', (done) =>{
            const movie ={
                title:'Udemy',
                director_id: '5e24da105fd5cf49e85104e2',
                category: 'Suç',
                country: 'ABD',
                year: 1960,
                imdb_score: 6
            };

            chai.request(server)
                .put('/api/movies/'+movieID)
                .send(movie)
                .set('x-access-token',token)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title').eql(movie.title);
                    res.body.should.have.property('director_id').eql(movie.director_id);
                    res.body.should.have.property('category').eql(movie.category);
                    res.body.should.have.property('country').eql(movie.country);
                    res.body.should.have.property('year').eql(movie.year);
                    res.body.should.have.property('imdb_score').eql(movie.imdb_score);
                    done();
                });
        });
    });

    describe('/DELETE movie', () => {
        it('it should DELETE a movie given by id', (done) =>{
            chai.request(server)
                .delete('/api/movies/'+movieID)
                .set('x-access-token',token)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('title');
                    res.body.should.have.property('director_id');
                    res.body.should.have.property('category');
                    res.body.should.have.property('country');
                    res.body.should.have.property('year');
                    res.body.should.have.property('imdb_score');
                    done();
                });
        });
    });


});

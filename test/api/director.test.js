const chaiHttp = require('chai-http');
const chai = require('chai');
const should =chai.should();
const server = require('../../app');

chai.use(chaiHttp);

let token,directorID;

describe('/api/director tests', () => {
    before((done) => {
        chai.request(server)
            .post('/authenticate')
            .send({username: 'Ayberk1', password: '12345'})
            .end((err, res) => {
                token = res.body.token;
                done();
            });
    });

    describe('GET Directors', () => {
        it('it should GET all the directors', (done) => {
            chai.request(server)
                .get('/api/directors')
                .set('x-access-token',token)
                .end((err, res) => {
                    if(err)
                        throw err;
                    res.should.have.status(200);
                    res.body.should.be.a('array'); // Dönen değerler (body) bir array olmalı
                    done();
                });
        })
    });

    describe('/POST Directors', () => {
        it('Add Director', (done) =>{
            const director ={
                name: 'Harry',
                surname: 'Jackson',
                bio: 'Harry Lorem Jackson Lorem'
            };

            chai.request(server)
                .post('/api/directors')
                .send(director)
                .set('x-access-token',token)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('surname');
                    res.body.should.have.property('bio');
                    directorID = res.body._id;
                    done();
                });
        });
    });

    describe('/GET:director_id ', () =>{
        it('it should GET a director', (done) =>{
            chai.request(server)
                .get('/api/directors/'+ directorID)
                .set('x-access-token', token)
                .end((err,res) =>{
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        });
    });

    describe('/PUT directors', () => {
        it('it should UPDATE a directors given by id', (done) =>{
            const director ={
                name: 'Ahmet',
                surname: 'Haşim',
                bio: 'Haşim Lorem Ahmet Lorem'
            };

            chai.request(server)
                .put('/api/directors/'+directorID)
                .send(director)
                .set('x-access-token',token)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql(director.name);
                    res.body.should.have.property('surname').eql(director.surname);
                    res.body.should.have.property('bio').eql(director.bio);
                    done();
                });
        });
    });

    describe('/DELETE director', () => {
        it('it should DELETE a director given by id', (done) =>{
            chai.request(server)
                .delete('/api/directors/'+ directorID)
                .set('x-access-token',token)
                .end((err,res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name');
                    res.body.should.have.property('surname');
                    res.body.should.have.property('bio');
                    done();
                });
        });
    });
});

import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormGroup, Input, ListGroup, ListGroupItem, Navbar, NavbarBrand, Row } from 'reactstrap'

const DisplayRepos = () => {

    const [githubId, setGithubId] = useState('')
    const [language, setLanguage] = useState('')
    const [repos, setRepos] = useState([])
    const [error, setError] = useState('')

    const handleId = (e) => {
        setGithubId(e.target.value)
    }

    const handleLanguage = (e) => {
        setLanguage(e.target.value)
    }
    
    const getRepos = (e) => {
        e.preventDefault()
        fetch(`https://github.com/search?q=user:${githubId} language:${language}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(data.message)
                } else {
                    setRepos(data)
                    
                }
        })
        
    }

    return (
        <>
            <Navbar className='navbar'>
                <NavbarBrand className='navbar-brand'href="/">Github Repos</NavbarBrand>
            </Navbar>
            <Container>
                {error !== ''
                ? (<h1 className = 'text-center'> {error}</h1>)
                    : (
                        <>
                        <Form className = 'repos-form m-5' onSubmit={getRepos}>
                            <FormGroup>
                                <Input
                                    className = 'mb-4'
                                    type='text'
                                    name = 'githubusername'
                                    placeholder='Github username'
                                    value={githubId}
                                    onChange={handleId}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    className = 'mb-4'
                                    type='text'
                                    name = 'language'
                                    placeholder='Enter language'
                                    value={language}
                                    onChange={handleLanguage}
                                />
                            </FormGroup>
                            <Button color="info">Get Repos</Button>
                        </Form>
                        {repos.length > 0
                            ? (<ListGroup>
                                {language !== ''
                                    ? (repos.map(repo => (
                                        (repo.language && repo.language.toLowerCase() === language.toLowerCase() && (
                                            <ListGroupItem key={repo.id} className='mb-2'>
                                                <Row>
                                                    <Col>
                                                        <h3>
                                                            <a href={repo.html_url} className='text-info'>
                                                                {repo.name}
                                                            </a>
                                                        </h3>
                                                        <h4>{repo.description}</h4>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <p>Stars: {repo.stargazers_count}</p>
                                                        <p>Watchers: {repo.watchers}</p>
                                                        <p>Forks: {repo.forks_count}</p>
                                                    </Col>
                                                </Row>
                                            </ListGroupItem>
                                        ))
                                    )))
                                    : (repos.map(repo => (
                                        <ListGroupItem key={repo.id} className='mb-2'>
                                            <Row>
                                                <Col>
                                                    <h3>
                                                        <a href={repo.html_url} className='text-info'>
                                                            {repo.name}
                                                        </a>
                                                    </h3>
                                                    <h4>{repo.description}</h4>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <p>Stars: {repo.stargazers_count}</p>
                                                    <p>Watchers: {repo.watchers}</p>
                                                    <p>Forks: {repo.forks_count}</p>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    )))
                                }
                            </ListGroup>)
                            : (<h1> No Repos Yet</h1>)
                            }
                        </>
                    )
                }
            </Container>
        </>
    )
}

export default DisplayRepos

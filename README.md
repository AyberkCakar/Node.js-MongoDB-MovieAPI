<h1><a id="user-content-movies" class="anchor" aria-hidden="true" href="#movies"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Movies</h1>
<table>
<thead>
<tr>
<th>Route</th>
<th>HTTP Verb</th>
<th>POST body</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/api/movies</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>List all movies.</td>
</tr>
<tr>
<td>/api/movies</td>
<td><code>POST</code></td>
<td>{'title':'foo', 'category':'bar', 'country':'Turkey', year:1990, director:"id", imdb_score: 9.7 }</td>
<td>Create a new movie.</td>
</tr>
<tr>
<td>/api/movies/:movie_id</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Get a movie.</td>
</tr>
<tr>
<td>/api/movies/:movie_id</td>
<td><code>PUT</code></td>
<td>{'name':'foo', 'surname':'bar'}</td>
<td>Update a movie with new info.</td>
</tr>
<tr>
<td>/api/movies/:movie_id</td>
<td><code>DELETE</code></td>
<td>Empty</td>
<td>Delete a movie.</td>
</tr>
<tr>
<td>/api/movies/top10</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Get the top 10 movies.</td>
</tr>
<tr>
<td>/api/movies/between/:start_year/:end_year</td>
<td><code>GET</code></td>
<td>Empty</td>
<td>Movies between two dates.</td>
</tr>
</tbody>
</table>.js-MongoDB-MovieAPI


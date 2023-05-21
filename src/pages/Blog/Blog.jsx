

const Blog = () => {
    return (
        <div>
           
            <div className="card w-1/2 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store </h2>
                    <p>An access token is a credential that represents the authorization granted to a client to access protected resources on a server. It is typically obtained by exchanging valid authentication credentials. Refresh tokens are long-lived tokens used to obtain new access tokens once they expire. On the client-side, access tokens are commonly stored in memory or local storage, while refresh tokens should be securely stored, preferably in an HTTP-only cookie or secure storage mechanism.</p>
                </div>
            </div>

            <div className="card w-1/2 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p>SQL and NoSQL databases differ in their data models and querying approaches. SQL databases, such as MySQL and PostgreSQL, are based on a structured, tabular model with predefined schemas and support for complex queries, joins, and transactions. NoSQL databases, like MongoDB and Redis, offer schema flexibility and horizontal scalability, often sacrificing strong consistency for scalability and availability.</p>
                </div>
            </div>
            <div className="card w-1/2 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is express js ?  What is Nest JS ?</h2>
                    <p>Express.js is a fast and minimalist web application framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware, template rendering, and more. Express.js simplifies the process of creating server-side applications in Node.js, making it a popular choice among developers.
                        <br /><br />
                        NestJS is a progressive Node.js framework inspired by Angular. It uses TypeScript as its primary language and focuses on building scalable and maintainable server-side applications. NestJS leverages decorators, dependency injection, and a modular architecture to create robust and testable applications.
                    </p>
                </div>
            </div>
            <div className="card w-1/2 mx-auto my-4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>MongoDBs aggregate is a powerful framework for performing data aggregation operations on collections. It allows you to process and transform data using various stages in a pipeline, such as filtering, grouping, sorting, and aggregating. MongoDBs aggregate framework provides a flexible and efficient way to analyze and extract insights from your data, offering powerful features for data aggregation and computation.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;
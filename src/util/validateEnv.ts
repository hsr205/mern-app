import {cleanEnv, str, port} from "envalid";

// Acts as an environment variable checker
// Will ensure that the correct types / environment variables are passed
export default cleanEnv(process.env, {
    DEFAULT_PORT_NUM: port(),
    MONGO_DB_USERNAME: str(),
    MONGO_DB_PASSWORD: str(),
    MONGO_DB_CONNECTION_STR: str(),
});


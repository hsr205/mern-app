import {cleanEnv, str, port} from "envalid";

export default cleanEnv(process.env, {
    DEFAULT_PORT_NUM: port(),
    MONGO_DB_USERNAME: str(),
    MONGO_DB_PASSWORD: str(),
    MONGO_DB_CONNECTION_STR: str(),
});


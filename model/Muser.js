import mysql from "mysql2/promise";

const conn = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt8",
});

// createConnection : 단일 연결, 매번 연결이 필요할 때마다 새로운 연결 생성
// 따라서 연결 수가 많아지면 성능에 영향이 생김
// createPool : 다중 연결, 여러 개의 연결을 미리 생성하고 관리
// 요청이 들어올 때마다 생성한 연결을 할당함 동시 처리가 가능

export const signup = async (userid, name, pw) => {
  try {
    // 준비된 query
    // 보안 강화
    // 미리 query문을 생성해놓음으로써 성능이 향상됨
    const query = `INSERT INTO user(userid, name, pw) VALUES (?, ?, ?);`;
    const rows = await conn.query(query, [userid, name, pw]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (userid, pw) => {
  try {
    const query = `SELECT * FROM user WHERE userid = ? AND pw = ?;`;
    // 배열 구조분해 할당
    // 배열의 첫 번째 인덱스에 해당하는 값만 사용
    const [rows] = await conn.query(query, [userid, pw]);
    console.log(rows);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const viewProfile = async (userid) => {
  try {
    const query = `SELECT * FROM user WHERE userid = ?;`;
    const [rows] = await conn.query(query, [userid]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const editProfile = async (userid, name, pw) => {
  try {
    const query = `UPDATE user SET name = ?, pw = ? WHERE userid = ?;`;
    const [rows] = await conn.query(query, [name, pw, userid]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProfile = async (userid) => {
  try {
    const query = `DELETE FROM user WHERE userid = ?;`;
    const [rows] = await conn.query(query, [userid]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

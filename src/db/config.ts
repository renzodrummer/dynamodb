import "dotenv/config";

module.exports = {
  aws_table_name: "arcs_member",
  aws_config: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretKey,
    region: process.env.region
  }
}
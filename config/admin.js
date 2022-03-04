module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e0002acb7d8497e0550abc8a47a563a'),
  },
});

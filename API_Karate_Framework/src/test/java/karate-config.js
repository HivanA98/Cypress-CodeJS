function fn() {
  // Pilih environment dengan: mvn test -Dkarate.env=staging
  var env = karate.env || 'dev'

  var config = {
    env: env,
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }

  karate.configure('connectTimeout', 10000)
  karate.configure('readTimeout', 10000)
  karate.configure('headers', { Accept: 'application/json' })

  return config
}

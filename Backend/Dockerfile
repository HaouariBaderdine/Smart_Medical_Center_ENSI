# Utilisez une image Docker officielle de Java 17 comme base
FROM adoptopenjdk/openjdk17:jdk-17.0.0_35-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copiez le jar de l'application Spring Boot dans l'image Docker
COPY target/my-spring-boot-app.jar .

# Exposez le port 8081
EXPOSE 8081

# Démarrez l'application Spring Boot lors du démarrage du conteneur
CMD ["java", "-jar", "my-spring-boot-app.jar"]

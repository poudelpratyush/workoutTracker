
# -----------Stage-1: Build the JAR--------------
# Pulling a linux environment with the full jdk 21 installed
# Creating a container
# AS builder is like giving it a variable name so its easy to grab files from it later
FROM eclipse-temurin:21-jdk-alpine AS builder

# Creates a folder name /app inside the container and makes it the active directory
WORKDIR /app

# This copies the maven configs and pom.xml into the container.

# copies mvnw into app
COPY mvnw .
# copies .mvn into a folder .mvn
COPY .mvn .mvn
# copies pom.xml into app
COPY pom.xml .


# chmod +x mvnw creates a maven executable and the code after downloads all the dependencies
RUN chmod +x mvnw && ./mvnw dependency:go-offline -B


# Copies the actual java source code into the container
COPY src ./src

# Runs maven to compile the code into a final .jar file 
# -DskipTests skips all the unit tests when running
# -B basically just leaves a clean terminal output
RUN ./mvnw package -DskipTests -B


# --------------Stage-2 Run the JAR-------------

# Initializes a completely brand-new empty linux container with the JRE (diff from before)
FROM eclipse-temurin:21-jre-alpine

# This creates an /app directory inside the new container and makes it the active directory
WORKDIR /app

# Tells docker to look at the container from a previous stage called builder
# there find the /app/target/ folder and grab the jar files in there
# and then copy it into the current stage 2 container and rename it to app.jar to keep it simple
COPY --from=builder /app/target/*.jar app.jar
# after this line the stage 1 builder container is discarded



# Tells the container that the network traffic is going to be looking at port 8080
EXPOSE 8080

# RUN always runs when the image is being build and the ENTRYPOINT runs when you manually start up the container
# This is the exact command you would type in the terminal to run the java application
# It fires up the JRE (Java), tells it to execute a jar file (-jar) and points it to the file that we copied (app.jar)
ENTRYPOINT [ "java", "-jar", "app.jar" ]


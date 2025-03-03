-- SQLite

CREATE TABLE Adresse(
   code_postal INTEGER,
   ville TEXT NOT NULL,
   PRIMARY KEY(code_postal)
);

CREATE TABLE Horaire(
   id_horaire INTEGER,
   jour TEXT NOT NULL,
   horaire_ouverture NUMERIC NOT NULL,
   horaire_fermeture NUMERIC NOT NULL,
   PRIMARY KEY(id_horaire)
);

CREATE TABLE Modalite(
   id_modalite INTEGER,
   nom_modalite TEXT NOT NULL,
   PRIMARY KEY(id_modalite)
);

CREATE TABLE Centre(
   numero_finess INTEGER,
   nom TEXT NOT NULL,
   site_web TEXT,
   numero_telephone TEXT NOT NULL,
   adresse_mail TEXT NOT NULL,
   coordonnee_geographique TEXT,
   adresse TEXT NOT NULL,
   code_postal INTEGER NOT NULL,
   PRIMARY KEY(numero_finess),
   FOREIGN KEY(code_postal) REFERENCES code_postal(code_postal)
);

CREATE TABLE centre_horaire(
   numero_finess INTEGER,
   id_horaire INTEGER,
   PRIMARY KEY(numero_finess, id_horaire),
   FOREIGN KEY(numero_finess) REFERENCES Centre(numero_finess),
   FOREIGN KEY(id_horaire) REFERENCES Horaire(id_horaire)
);

CREATE TABLE centre_modalite(
   numero_finess INTEGER,
   id_modalite INTEGER,
   PRIMARY KEY(numero_finess, id_modalite),
   FOREIGN KEY(numero_finess) REFERENCES Centre(numero_finess),
   FOREIGN KEY(id_modalite) REFERENCES Modalite(id_modalite)
);


-- Insertion des données dans la table Modalite

INSERT INTO Modalite(nom_modalite) VALUES('Hémodialyse en centre pour adulte');
INSERT INTO Modalite(nom_modalite) VALUES('Hémodialyse en unité de dialyse médicalisée');
INSERT INTO Modalite(nom_modalite) VALUES('Hémodialyse à domicile');
INSERT INTO Modalite(nom_modalite) VALUES('Hémodialyse longue nocturne');

-- Insertion des données dans la table Adresse

INSERT INTO Adresse (code_postal, ville) VALUES (75001, 'Paris');
INSERT INTO Adresse (code_postal, ville) VALUES (69001, 'Lyon');

-- Insertion des données dans la table Centre

INSERT INTO Centre (numero_finess, nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES (179324865, 'Centre Paris', 'www.centreparis.fr', '0102030405', 'contact@centreparis.fr', '48.8566,2.3522', '1 Rue de Paris', 75001);
INSERT INTO Centre (numero_finess, nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES (9517538426, 'Centre Lyon', 'www.centrelyon.fr', '0607080910', 'contact@centrelyon.fr', '45.7640,4.8357', '1 Rue de Lyon', 69001);


-- Insertion des données dans la table Horaire

INSERT INTO Horaire (id_horaire, jour, horaire_ouverture, horaire_fermeture) VALUES (1, 'Lundi', '08:00', '18:00');
INSERT INTO Horaire (id_horaire, jour, horaire_ouverture, horaire_fermeture) VALUES (2, 'Mardi', '08:00', '18:00');
INSERT INTO Horaire (id_horaire, jour, horaire_ouverture, horaire_fermeture) VALUES (3, 'Mercredi', '08:00', '18:00');
INSERT INTO Horaire (id_horaire, jour, horaire_ouverture, horaire_fermeture) VALUES (4, 'Jeudi', '08:00', '18:00');
INSERT INTO Horaire (id_horaire, jour, horaire_ouverture, horaire_fermeture) VALUES (5, 'Vendredi', '08:00', '18:00');
INSERT INTO Horaire (id_horaire, jour, horaire_ouverture, horaire_fermeture) VALUES (6, 'Samedi', '08:00', '18:00');
INSERT INTO Horaire (id_horaire, jour, horaire_ouverture, horaire_fermeture) VALUES (7, 'Dimanche', '08:00', '18:00');

-- Insertion des données dans la table centre_horaire

INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (179324865, 1);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (179324865, 2);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (179324865, 3);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (179324865, 4);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (179324865, 5);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (179324865, 6);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (179324865, 7);

INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (9517538426, 1);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (9517538426, 2);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (9517538426, 3);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (9517538426, 4);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (9517538426, 5);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (9517538426, 6);
INSERT INTO centre_horaire (numero_finess, id_horaire) VALUES (9517538426, 7);

-- Insertion des données dans la table centre_modalite

INSERT INTO centre_modalite (numero_finess, id_modalite) VALUES (179324865, 1);
INSERT INTO centre_modalite (numero_finess, id_modalite) VALUES (9517538426, 2);
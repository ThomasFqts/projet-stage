-- SQLite

CREATE TABLE Modalite(
   id_modalite INTEGER,
   nom_modalite TEXT NOT NULL,
   PRIMARY KEY(id_modalite)
);

CREATE TABLE Adresse(
   code_postal INTEGER,
   ville TEXT NOT NULL,
   PRIMARY KEY(code_postal)
);

CREATE TABLE Centre(
   numero_finess INTEGER,
   Nom TEXT NOT NULL,
   site_web TEXT,
   numero_telephone TEXT NOT NULL,
   adresse_mail TEXT NOT NULL,
   coordonnee_geographique TEXT,
   adresse TEXT NOT NULL,
   code_postal INTEGER NOT NULL,
   PRIMARY KEY(numero_finess),
   FOREIGN KEY(code_postal) REFERENCES Adresse(code_postal)
);

CREATE TABLE Horaire(
   id_horaire INTEGER,
   jour TEXT NOT NULL,
   horaire_ouverture NUMERIC NOT NULL,
   horaire_fermeture NUMERIC NOT NULL,
   numero_finess INTEGER NOT NULL,
   PRIMARY KEY(id_horaire),
   FOREIGN KEY(numero_finess) REFERENCES Centre(numero_finess)
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

INSERT INTO Adresse(code_postal, ville) VALUES(75001, 'Paris');
INSERT INTO Adresse(code_postal, ville) VALUES(69001, 'Lyon');
INSERT INTO Adresse(code_postal, ville) VALUES(13001, 'Marseille');
INSERT INTO Adresse(code_postal, ville) VALUES(31000, 'Toulouse');
INSERT INTO Adresse(code_postal, ville) VALUES(44000, 'Nantes');
INSERT INTO Adresse(code_postal, ville) VALUES(67000, 'Strasbourg');

-- Insertion des données dans la table Centre

INSERT INTO Centre(numero_finess, Nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES(750000001, 'Centre de dialyse de Paris', 'www.centre-dialyse-paris.fr', '01 23 45 67 89', 'centrededialyseparis@test.com', 
'48.8566, 2.3522', '1 rue de Paris', 75001);
INSERT INTO Centre(numero_finess, Nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES(690000002, 'Centre de dialyse de Lyon', 'www.centre-dialyse-lyon.fr', '04 78 54 32 10', 'centrededialyselyon@test.com', 
'45.7640, 4.8357', '2 rue de Lyon', 69001);

INSERT INTO Centre(numero_finess, Nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES(130000003, 'Centre de dialyse de Marseille', 'www.centre-dialyse-marseille.fr', '04 91 23 45 67', 'centrededialysemarseille@test.com', 
'43.2965, 5.3698', '3 rue de Marseille', 13001);

INSERT INTO Centre(numero_finess, Nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES(310000004, 'Centre de dialyse de Toulouse', 'www.centre-dialyse-toulouse.fr', '05 61 23 45 67', 'centrededialysetoulouse@test.com', 
'43.6047, 1.4442', '4 rue de Toulouse', 31000);

INSERT INTO Centre(numero_finess, Nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES(440000005, 'Centre de dialyse de Nantes', 'www.centre-dialyse-nantes.fr', '02 40 23 45 67', 'centrededialysenantes@test.com', 
'47.2184, -1.5536', '5 rue de Nantes', 44000);

INSERT INTO Centre(numero_finess, Nom, site_web, numero_telephone, adresse_mail, coordonnee_geographique, adresse, code_postal) 
VALUES(670000006, 'Centre de dialyse de Strasbourg', 'www.centre-dialyse-strasbourg.fr', '03 88 23 45 67', 'centrededialysestrasbourg@test.com', 
'48.5734, 7.7521', '6 rue de Strasbourg', 67000);

-- Insertion des données dans la table Horaire

INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Lundi', 8, 18, 750000001);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mardi', 8, 18, 750000001);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mercredi', 8, 18, 750000001);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Jeudi', 8, 18, 750000001);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Vendredi', 8, 18, 750000001);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Samedi', 8, 18, 750000001);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Dimanche', 8, 18, 750000001);

INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Lundi', 8, 18, 690000002);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mardi', 8, 18, 690000002);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mercredi', 8, 18, 690000002);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Jeudi', 8, 18, 690000002);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Vendredi', 8, 18, 690000002);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Samedi', 8, 18, 690000002);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Dimanche', 8, 18, 690000002);

INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Lundi', 8, 18, 130000003);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mardi', 8, 18, 130000003);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mercredi', 8, 18, 130000003);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Jeudi', 8, 18, 130000003);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Vendredi', 8, 18, 130000003);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Samedi', 8, 18, 130000003);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Dimanche', 8, 18, 130000003);

INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Lundi', 8, 18, 310000004);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mardi', 8, 18, 310000004);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mercredi', 8, 18, 310000004);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Jeudi', 8, 18, 310000004);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Vendredi', 8, 18, 310000004);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Samedi', 8, 18, 310000004);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Dimanche', 8, 18, 310000004);

INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Lundi', 8, 18, 440000005);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mardi', 8, 18, 440000005);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mercredi', 8, 18, 440000005);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Jeudi', 8, 18, 440000005);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Vendredi', 8, 18, 440000005);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Samedi', 8, 18, 440000005);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Dimanche', 8, 18, 440000005);

INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Lundi', 8, 18, 670000006);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mardi', 8, 18, 670000006);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Mercredi', 8, 18, 670000006);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Jeudi', 8, 18, 670000006);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Vendredi', 8, 18, 670000006);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Samedi', 8, 18, 670000006);
INSERT INTO Horaire(jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES('Dimanche', 8, 18, 670000006);

-- Insertion des données dans la table centre_modalite

INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(750000001, 1);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(750000001, 2);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(750000001, 3);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(750000001, 4);

INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(690000002, 1);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(690000002, 2);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(690000002, 3);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(690000002, 4);

INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(130000003, 1);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(130000003, 2);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(130000003, 3);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(130000003, 4);

INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(310000004, 1);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(310000004, 2);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(310000004, 3);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(310000004, 4);

INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(440000005, 1);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(440000005, 2);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(440000005, 3);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(440000005, 4);

INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(670000006, 1);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(670000006, 2);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(670000006, 3);
INSERT INTO centre_modalite(numero_finess, id_modalite) VALUES(670000006, 4);
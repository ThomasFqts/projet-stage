<?php

$pdo = new PDO('sqlite:bdd/db.sqlite');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données du formulaire
    $nom_centre = $_POST['nom_centre'];
    $numero_finess = $_POST['numero_finess'];
    $site_web = $_POST['site_web'];
    $adresse = $_POST['adresse'];
    $code_postal = $_POST['code_postal'] === 'other' ? $_POST['new_code_postal'] : $_POST['code_postal'];
    $ville = $_POST['ville'] === 'other' ? $_POST['new_ville'] : $_POST['ville'];
    $telephone = $_POST['telephone'];
    $mail = $_POST['mail'];
    $modalite = $_POST['modalite'];
    $jours = $_POST['jour'];
    $heures_ouverture = $_POST['heure_ouverture'];
    $heures_fermeture = $_POST['heure_fermeture'];

    // Insérer les données dans la table Adresse si nécessaire
    $stmt = $pdo->prepare("INSERT OR IGNORE INTO Adresse (code_postal, ville) VALUES (?, ?)");
    $stmt->execute([$code_postal, $ville]);

    // Insérer les données dans la table Centre
    $stmt = $pdo->prepare("INSERT INTO Centre (numero_finess, Nom, site_web, numero_telephone, adresse_mail, adresse, code_postal) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$numero_finess, $nom_centre, $site_web, $telephone, $mail, $adresse, $code_postal]);

    // Insérer les données dans la table Horaire
    $stmt = $pdo->prepare("INSERT INTO Horaire (jour, horaire_ouverture, horaire_fermeture, numero_finess) VALUES (?, ?, ?, ?)");
    for ($i = 0; $i < count($jours); $i++) {
        $stmt->execute([$jours[$i], $heures_ouverture[$i], $heures_fermeture[$i], $numero_finess]);
    }

    // Insérer les données dans la table centre_modalite
    $stmt = $pdo->prepare("INSERT INTO centre_modalite (numero_finess, id_modalite) VALUES (?, ?)");
    $stmt->execute([$numero_finess, $modalite]);

    header('Location: index.php');
    exit();
}

$stmt = $pdo->prepare("SELECT * FROM Centre 
JOIN Adresse ON Centre.code_postal = Adresse.code_postal");
$stmt->execute();
$centres = $stmt->fetchAll();

$stmt = $pdo->prepare("SELECT * FROM Modalite");
$stmt->execute();
$modalites = $stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous">
    <title>Centres dialyse</title>
</head>

<body>
    <form action="" method="post" class="form form-control p-4">
        <h1 class="mb-4">Centres de dialyse</h1>
        <section class="row g-3">
            <!-- Article contenant le nom du centre de dialyse -->
            <article class="col-md-6">
                <label for="nom_centre" class="form-label">Nom du centre :</label>
                <input type="text" name="nom_centre" id="nom_centre" class="form-control">
            </article>

            <!-- Article contenant le numéro Finess -->
            <article class="col-md-6">
                <label for="numero_finess" class="form-label">Numero Finess :</label>
                <input type="text" name="numero_finess" id="numero_finess" class="form-control">
            </article>

            <!-- Article contenant le site web -->
            <article class="col-md-6">
                <label for="site_web" class="form-label">Site web :</label>
                <input type="url" name="site_web" id="site_web" class="form-control">
            </article>

            <!-- Article contenant l'adresse -->
            <article class="col-md-6">
                <label for="adresse" class="form-label">Adresse :</label>
                <input type="text" name="adresse" id="adresse" class="form-control">
            </article>

            <!-- Article contenant le code postal -->
            <article class="col-md-6">
                <label for="code_postal" class="form-label">Code postal :</label>
                <select name="code_postal" id="code_postal" class="form-select">
                    <option value="" selected disabled hidden>Veuillez séléctionner un code postal ou en ajouter un...</option>
                    <?php foreach ($centres as $centre): ?>
                        <option value="<?= $centre['code_postal'] ?>"><?= $centre['code_postal'] ?></option>
                    <?php endforeach; ?>
                    <option value="other">Autre</option>
                </select>
                <input type="text" name="new_code_postal" id="new_code_postal" class="form-control mt-2" placeholder="Nouveau code postal" style="display: none;">
            </article>

            <!-- Article contenant la ville -->
            <article class="col-md-6">
                <label for="ville" class="form-label">Ville :</label>
                <select name="ville" id="ville" class="form-select">
                    <option value="" selected disabled hidden>Veuillez séléctionner une ville ou en ajouter une...</option>
                    <?php foreach ($centres as $centre): ?>
                        <option value="<?= $centre['ville'] ?>"><?= $centre['ville'] ?></option>
                    <?php endforeach; ?>
                    <option value="other">Autre</option>
                </select>
                <input type="text" name="new_ville" id="new_ville" class="form-control mt-2" placeholder="Nouvelle ville" style="display: none;">
            </article>

            <!-- Article contenant le téléphone -->
            <article class="col-md-6">
                <label for="telephone" class="form-label">Telephone :</label>
                <input type="text" name="telephone" id="telephone" class="form-control">
            </article>

            <!-- Article contenant l'email -->
            <article class="col-md-6">
                <label for="mail" class="form-label">Mail :</label>
                <input type="email" name="mail" id="mail" class="form-control">
            </article>

            <!-- Article contenant les modalités -->
            <article class="col-md-6">
                <label for="modalite" class="form-label">Modalités :</label>
                <select name="modalite" id="modalite" class="form-select">
                    <option value="" selected disabled hidden>Veuillez séléctionnez une modalité...</option>
                    <?php foreach ($modalites as $modalite): ?>
                        <option value="<?= $modalite['id_modalite'] ?>"><?= $modalite['nom_modalite'] ?></option>
                    <?php endforeach; ?>
                </select>
            </article>

            <!-- Section pour ajouter des jours et heures -->
            <section id="jours-heures" class="row g-3">
                <article class="col-md-6">
                    <label for="jour" class="form-label">Jour :</label>
                    <input type="text" name="jour[]" id="jour" class="form-control">
                </article>

                <article class="col-md-6">
                    <label for="heure_ouverture" class="form-label">Heure ouverture :</label>
                    <input type="time" name="heure_ouverture[]" id="heure_ouverture" class="form-control">
                </article>

                <article class="col-md-6">
                    <label for="heure_fermeture" class="form-label">Heure fermeture :</label>
                    <input type="time" name="heure_fermeture[]" id="heure_fermeture" class="form-control">
                </article>
            </section>

            <button type="button" id="add-day" class="btn btn-secondary mt-4">Ajouter un autre jour</button>
            <button type="submit" class="btn btn-primary mt-4">Ajouter un centre</button>
        </section>

    </form>
    <script src="Scripts/script.js"></script>
</body>

</html>
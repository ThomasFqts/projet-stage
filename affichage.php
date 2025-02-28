<?php

$pdo = new PDO('sqlite:bdd/db.sqlite');

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

    <h1>Centres de dialyse</h1>

    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Code postal</th>
                <th>Ville</th>
                <th>Telephone</th>
                <th>Mail</th>
                <th>Site web
                <th>Modalités</th>
                <th>Horaires</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($centres as $centre): ?>
                <?php
                $id_centre = $centre['numero_finess'];
                $stmt = $pdo->prepare("SELECT * FROM Centre
                        JOIN Horaire ON Centre.numero_finess = Horaire.numero_finess
                        WHERE Horaire.numero_finess = :id_centre");
                $stmt->execute([$id_centre]);
                $horaires = $stmt->fetchAll();
                ?>
                <tr>
                    <td><?= $centre['Nom'] ?></td>
                    <td><?= $centre['adresse'] ?></td>
                    <td><?= $centre['code_postal'] ?></td>
                    <td><?= $centre['ville'] ?></td>
                    <td><?= $centre['numero_telephone'] ?></td>
                    <td><?= $centre['adresse_mail'] ?></td>
                    <td><?= $centre['site_web'] ?></td>
                    <td>
                        <select name="" id="">
                            <?php foreach ($modalites as $modalite) : ?>
                                <option value="<?= $modalite['nom_modalite'] ?>"><?= $modalite['nom_modalite'] ?></option>
                            <?php endforeach; ?>
                        </select>
                    </td>
                    <td>
                        <ul>
                            <?php foreach ($horaires as $horaire) : ?>
                                <li><?= $horaire['jour'] ?> : <?= $horaire['horaire_ouverture'] ?> - <?= $horaire['horaire_fermeture'] ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>


    </table>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous">
    </script>
</body>

</html>
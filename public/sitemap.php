<?php
    header("Content-Type: application/xml; charset=utf-8");
    echo "<?xml version='1.0' encoding='UTF-8'?>";
?>

<urlset xmlns='http://www.sitemap.org.schemas/sitemap/0.9'>
    <url>
        <loc>https://plaisirsdailleurs.fr/</loc>
        <lastmod><?php echo date("Y-m-d"); ?></lastmod>
        <changefreq>daily</changefreq>
        <priority>1</priority>
    </url>
</urlset>
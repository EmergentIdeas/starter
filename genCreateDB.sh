. src/com/emergentideas/base/data/db.properties
dbname=`echo "$url" | cut -d '/' -f 4`
echo "create database $dbname;"
echo "GRANT ALL PRIVILEGES ON $dbname.* TO '$user'@'localhost' IDENTIFIED BY '$password';"


import json

if __name__ == "__main__":
    rating_dict = json.load(open('ratings.json'))
    instructorID = 0
    instructorName = ""
    rating = 0.0
    print(rating_dict)
    for key in rating_dict:
        instructorName = key
        instructorID = int(rating_dict[key]['id'])
        try:
            rating = float(rating_dict[key]['rating'])
        except:
            pass
        print("INSERT INTO Instructor(instructorID, instructorName, rmpRating) VALUES (" + str(instructorID) + "\", "
                + instructorName + "\", " + str(rating) + ");")
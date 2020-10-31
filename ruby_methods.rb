# gsub with ruby blocks

def animal(input_animal = "dog")
  input_animal.gsub(/\w+/) { |animal| 
    if animal == "dog"
      "You have a dog!"
    elsif animal == "cat"
      "That's a cat"
    else
      "I don't recognize this animal."
    end
  }
end


# using prompt

def ask
  puts "How many planets are present in our solar system?"
  answer = gets

  return "Incorrect" unless answer.to_i == 8
end



def get_domain(url)
  url.split("//").second
end

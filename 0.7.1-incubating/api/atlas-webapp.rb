#
# 
#
# Generated by <a href="http://enunciate.codehaus.org">Enunciate</a>.
#
require 'json'

# adding necessary json serialization methods to standard classes.
class Object
  def to_jaxb_json_hash
    return self
  end
  def self.from_json o
    return o
  end
end

class String
  def self.from_json o
    return o
  end
end

class Boolean
  def self.from_json o
    return o
  end
end

class Numeric
  def self.from_json o
    return o
  end
end

class Time
  #json time is represented as number of milliseconds since epoch
  def to_jaxb_json_hash
    return (to_i * 1000) + (usec / 1000)
  end
  def self.from_json o
    if o.nil?
      return nil
    else
      return Time.at(o / 1000, (o % 1000) * 1000)
    end
  end
end

class Array
  def to_jaxb_json_hash
    a = Array.new
    each { | _item | a.push _item.to_jaxb_json_hash }
    return a
  end
end

class Hash
  def to_jaxb_json_hash
    h = Hash.new
    each { | _key, _value | h[_key.to_jaxb_json_hash] = _value.to_jaxb_json_hash }
    return h
  end
end


module Org

module Apache

module Atlas

module Web

module Resources

  # 
  class ErrorBean 

    # (no documentation provided)
    attr_accessor :status
    # (no documentation provided)
    attr_accessor :message
    # (no documentation provided)
    attr_accessor :stackTrace

    # the json hash for this ErrorBean
    def to_jaxb_json_hash
      _h = {}
      _h['status'] = status.to_jaxb_json_hash unless status.nil?
      _h['message'] = message.to_jaxb_json_hash unless message.nil?
      _h['stackTrace'] = stackTrace.to_jaxb_json_hash unless stackTrace.nil?
      return _h
    end

    # the json (string form) for this ErrorBean
    def to_json
      to_jaxb_json_hash.to_json
    end

    #initializes this ErrorBean with a json hash
    def init_jaxb_json_hash(_o)
      @status = Fixnum.from_json(_o['status']) unless _o['status'].nil?
      @message = String.from_json(_o['message']) unless _o['message'].nil?
      @stackTrace = String.from_json(_o['stackTrace']) unless _o['stackTrace'].nil?
    end

    # constructs a ErrorBean from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end

end

module Org

module Apache

module Atlas

module Web

module Resources

  # 
  class ErrorBean 

    # (no documentation provided)
    attr_accessor :status
    # (no documentation provided)
    attr_accessor :message

    # the json hash for this ErrorBean
    def to_jaxb_json_hash
      _h = {}
      _h['status'] = status.to_jaxb_json_hash unless status.nil?
      _h['message'] = message.to_jaxb_json_hash unless message.nil?
      return _h
    end

    # the json (string form) for this ErrorBean
    def to_json
      to_jaxb_json_hash.to_json
    end

    #initializes this ErrorBean with a json hash
    def init_jaxb_json_hash(_o)
      @status = Fixnum.from_json(_o['status']) unless _o['status'].nil?
      @message = String.from_json(_o['message']) unless _o['message'].nil?
    end

    # constructs a ErrorBean from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end

end

module Org

module Apache

module Atlas

module Web

module Resources

  # 
  class Results 

    # (no documentation provided)
    attr_accessor :href
    # (no documentation provided)
    attr_accessor :status

    # the json hash for this Results
    def to_jaxb_json_hash
      _h = {}
      _h['href'] = href.to_jaxb_json_hash unless href.nil?
      _h['status'] = status.to_jaxb_json_hash unless status.nil?
      return _h
    end

    # the json (string form) for this Results
    def to_json
      to_jaxb_json_hash.to_json
    end

    #initializes this Results with a json hash
    def init_jaxb_json_hash(_o)
      @href = String.from_json(_o['href']) unless _o['href'].nil?
      @status = Fixnum.from_json(_o['status']) unless _o['status'].nil?
    end

    # constructs a Results from a (parsed) JSON hash
    def self.from_json(o)
      if o.nil?
        return nil
      else
        inst = new
        inst.init_jaxb_json_hash o
        return inst
      end
    end
  end

end

end

end

end

end
